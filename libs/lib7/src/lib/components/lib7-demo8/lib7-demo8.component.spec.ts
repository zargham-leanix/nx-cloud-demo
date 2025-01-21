import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo8Component } from './lib7-demo8.component';

describe('Lib7Demo8Component', () => {
  let component: Lib7Demo8Component;
  let fixture: ComponentFixture<Lib7Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
