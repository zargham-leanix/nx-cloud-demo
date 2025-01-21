import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo22Component } from './lib29-demo22.component';

describe('Lib29Demo22Component', () => {
  let component: Lib29Demo22Component;
  let fixture: ComponentFixture<Lib29Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
