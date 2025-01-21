import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo22Component } from './lib18-demo22.component';

describe('Lib18Demo22Component', () => {
  let component: Lib18Demo22Component;
  let fixture: ComponentFixture<Lib18Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
