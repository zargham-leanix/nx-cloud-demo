import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo42Component } from './lib35-demo42.component';

describe('Lib35Demo42Component', () => {
  let component: Lib35Demo42Component;
  let fixture: ComponentFixture<Lib35Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
