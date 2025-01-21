import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo22Component } from './lib26-demo22.component';

describe('Lib26Demo22Component', () => {
  let component: Lib26Demo22Component;
  let fixture: ComponentFixture<Lib26Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
