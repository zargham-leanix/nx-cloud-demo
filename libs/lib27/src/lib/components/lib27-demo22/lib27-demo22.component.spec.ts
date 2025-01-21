import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo22Component } from './lib27-demo22.component';

describe('Lib27Demo22Component', () => {
  let component: Lib27Demo22Component;
  let fixture: ComponentFixture<Lib27Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
