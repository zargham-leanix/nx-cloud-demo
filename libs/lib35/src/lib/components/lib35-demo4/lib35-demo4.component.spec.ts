import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo4Component } from './lib35-demo4.component';

describe('Lib35Demo4Component', () => {
  let component: Lib35Demo4Component;
  let fixture: ComponentFixture<Lib35Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
