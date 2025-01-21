import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo15Component } from './lib76-demo15.component';

describe('Lib76Demo15Component', () => {
  let component: Lib76Demo15Component;
  let fixture: ComponentFixture<Lib76Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
