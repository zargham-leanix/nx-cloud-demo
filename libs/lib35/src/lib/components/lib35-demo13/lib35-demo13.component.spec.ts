import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo13Component } from './lib35-demo13.component';

describe('Lib35Demo13Component', () => {
  let component: Lib35Demo13Component;
  let fixture: ComponentFixture<Lib35Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
