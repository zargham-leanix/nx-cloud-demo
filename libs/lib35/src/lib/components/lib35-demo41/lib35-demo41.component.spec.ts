import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo41Component } from './lib35-demo41.component';

describe('Lib35Demo41Component', () => {
  let component: Lib35Demo41Component;
  let fixture: ComponentFixture<Lib35Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
