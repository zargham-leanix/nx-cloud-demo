import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo22Component } from './lib84-demo22.component';

describe('Lib84Demo22Component', () => {
  let component: Lib84Demo22Component;
  let fixture: ComponentFixture<Lib84Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
