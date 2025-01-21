import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo22Component } from './lib63-demo22.component';

describe('Lib63Demo22Component', () => {
  let component: Lib63Demo22Component;
  let fixture: ComponentFixture<Lib63Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
