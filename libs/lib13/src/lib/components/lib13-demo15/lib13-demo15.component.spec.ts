import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo15Component } from './lib13-demo15.component';

describe('Lib13Demo15Component', () => {
  let component: Lib13Demo15Component;
  let fixture: ComponentFixture<Lib13Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
