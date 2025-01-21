import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo29Component } from './lib35-demo29.component';

describe('Lib35Demo29Component', () => {
  let component: Lib35Demo29Component;
  let fixture: ComponentFixture<Lib35Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
