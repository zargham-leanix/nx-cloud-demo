import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo23Component } from './lib35-demo23.component';

describe('Lib35Demo23Component', () => {
  let component: Lib35Demo23Component;
  let fixture: ComponentFixture<Lib35Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
