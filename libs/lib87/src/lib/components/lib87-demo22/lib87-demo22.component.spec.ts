import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo22Component } from './lib87-demo22.component';

describe('Lib87Demo22Component', () => {
  let component: Lib87Demo22Component;
  let fixture: ComponentFixture<Lib87Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
