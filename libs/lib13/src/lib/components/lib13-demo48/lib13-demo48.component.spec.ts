import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo48Component } from './lib13-demo48.component';

describe('Lib13Demo48Component', () => {
  let component: Lib13Demo48Component;
  let fixture: ComponentFixture<Lib13Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
