import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo23Component } from './lib7-demo23.component';

describe('Lib7Demo23Component', () => {
  let component: Lib7Demo23Component;
  let fixture: ComponentFixture<Lib7Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
