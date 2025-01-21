import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo22Component } from './lib53-demo22.component';

describe('Lib53Demo22Component', () => {
  let component: Lib53Demo22Component;
  let fixture: ComponentFixture<Lib53Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
