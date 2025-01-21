import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo15Component } from './lib7-demo15.component';

describe('Lib7Demo15Component', () => {
  let component: Lib7Demo15Component;
  let fixture: ComponentFixture<Lib7Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
