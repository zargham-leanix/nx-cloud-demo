import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo34Component } from './lib25-demo34.component';

describe('Lib25Demo34Component', () => {
  let component: Lib25Demo34Component;
  let fixture: ComponentFixture<Lib25Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
