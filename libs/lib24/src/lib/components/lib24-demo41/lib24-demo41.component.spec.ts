import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo41Component } from './lib24-demo41.component';

describe('Lib24Demo41Component', () => {
  let component: Lib24Demo41Component;
  let fixture: ComponentFixture<Lib24Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
