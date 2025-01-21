import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo22Component } from './lib80-demo22.component';

describe('Lib80Demo22Component', () => {
  let component: Lib80Demo22Component;
  let fixture: ComponentFixture<Lib80Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
