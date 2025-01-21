import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo11Component } from './lib76-demo11.component';

describe('Lib76Demo11Component', () => {
  let component: Lib76Demo11Component;
  let fixture: ComponentFixture<Lib76Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
