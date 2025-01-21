import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo22Component } from './lib85-demo22.component';

describe('Lib85Demo22Component', () => {
  let component: Lib85Demo22Component;
  let fixture: ComponentFixture<Lib85Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
