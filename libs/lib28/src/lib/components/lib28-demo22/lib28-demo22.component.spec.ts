import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo22Component } from './lib28-demo22.component';

describe('Lib28Demo22Component', () => {
  let component: Lib28Demo22Component;
  let fixture: ComponentFixture<Lib28Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
