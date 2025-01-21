import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo22Component } from './lib50-demo22.component';

describe('Lib50Demo22Component', () => {
  let component: Lib50Demo22Component;
  let fixture: ComponentFixture<Lib50Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
