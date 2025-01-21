import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo22Component } from './lib75-demo22.component';

describe('Lib75Demo22Component', () => {
  let component: Lib75Demo22Component;
  let fixture: ComponentFixture<Lib75Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
