import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo22Component } from './lib10-demo22.component';

describe('Lib10Demo22Component', () => {
  let component: Lib10Demo22Component;
  let fixture: ComponentFixture<Lib10Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
