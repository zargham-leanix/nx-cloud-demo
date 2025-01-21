import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo22Component } from './lib48-demo22.component';

describe('Lib48Demo22Component', () => {
  let component: Lib48Demo22Component;
  let fixture: ComponentFixture<Lib48Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
