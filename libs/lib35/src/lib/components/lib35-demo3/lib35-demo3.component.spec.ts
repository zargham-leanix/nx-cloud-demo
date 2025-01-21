import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo3Component } from './lib35-demo3.component';

describe('Lib35Demo3Component', () => {
  let component: Lib35Demo3Component;
  let fixture: ComponentFixture<Lib35Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
