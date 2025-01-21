import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo22Component } from './lib93-demo22.component';

describe('Lib93Demo22Component', () => {
  let component: Lib93Demo22Component;
  let fixture: ComponentFixture<Lib93Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
