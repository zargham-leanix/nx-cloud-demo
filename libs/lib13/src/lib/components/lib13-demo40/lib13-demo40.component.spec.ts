import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo40Component } from './lib13-demo40.component';

describe('Lib13Demo40Component', () => {
  let component: Lib13Demo40Component;
  let fixture: ComponentFixture<Lib13Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
