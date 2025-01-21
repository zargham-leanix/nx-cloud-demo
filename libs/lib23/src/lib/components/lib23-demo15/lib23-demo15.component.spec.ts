import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo15Component } from './lib23-demo15.component';

describe('Lib23Demo15Component', () => {
  let component: Lib23Demo15Component;
  let fixture: ComponentFixture<Lib23Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
