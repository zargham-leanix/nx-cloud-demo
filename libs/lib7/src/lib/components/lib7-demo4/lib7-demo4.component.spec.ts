import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo4Component } from './lib7-demo4.component';

describe('Lib7Demo4Component', () => {
  let component: Lib7Demo4Component;
  let fixture: ComponentFixture<Lib7Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
