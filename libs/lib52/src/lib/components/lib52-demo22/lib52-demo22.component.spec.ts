import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo22Component } from './lib52-demo22.component';

describe('Lib52Demo22Component', () => {
  let component: Lib52Demo22Component;
  let fixture: ComponentFixture<Lib52Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
