import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo22Component } from './lib20-demo22.component';

describe('Lib20Demo22Component', () => {
  let component: Lib20Demo22Component;
  let fixture: ComponentFixture<Lib20Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
