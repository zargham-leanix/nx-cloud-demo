import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo41Component } from './lib23-demo41.component';

describe('Lib23Demo41Component', () => {
  let component: Lib23Demo41Component;
  let fixture: ComponentFixture<Lib23Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
