import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo39Component } from './lib7-demo39.component';

describe('Lib7Demo39Component', () => {
  let component: Lib7Demo39Component;
  let fixture: ComponentFixture<Lib7Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
