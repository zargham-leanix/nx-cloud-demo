import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo25Component } from './lib7-demo25.component';

describe('Lib7Demo25Component', () => {
  let component: Lib7Demo25Component;
  let fixture: ComponentFixture<Lib7Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
