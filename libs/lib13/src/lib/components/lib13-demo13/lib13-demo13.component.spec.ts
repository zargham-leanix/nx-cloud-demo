import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo13Component } from './lib13-demo13.component';

describe('Lib13Demo13Component', () => {
  let component: Lib13Demo13Component;
  let fixture: ComponentFixture<Lib13Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
