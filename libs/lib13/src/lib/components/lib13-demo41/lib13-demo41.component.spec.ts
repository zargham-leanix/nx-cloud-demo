import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo41Component } from './lib13-demo41.component';

describe('Lib13Demo41Component', () => {
  let component: Lib13Demo41Component;
  let fixture: ComponentFixture<Lib13Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
