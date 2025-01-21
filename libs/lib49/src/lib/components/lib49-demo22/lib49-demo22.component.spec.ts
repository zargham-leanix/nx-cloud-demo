import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo22Component } from './lib49-demo22.component';

describe('Lib49Demo22Component', () => {
  let component: Lib49Demo22Component;
  let fixture: ComponentFixture<Lib49Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
