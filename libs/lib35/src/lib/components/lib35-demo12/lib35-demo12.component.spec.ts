import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo12Component } from './lib35-demo12.component';

describe('Lib35Demo12Component', () => {
  let component: Lib35Demo12Component;
  let fixture: ComponentFixture<Lib35Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
