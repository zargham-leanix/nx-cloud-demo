import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo22Component } from './lib25-demo22.component';

describe('Lib25Demo22Component', () => {
  let component: Lib25Demo22Component;
  let fixture: ComponentFixture<Lib25Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
