import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo10Component } from './lib7-demo10.component';

describe('Lib7Demo10Component', () => {
  let component: Lib7Demo10Component;
  let fixture: ComponentFixture<Lib7Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
