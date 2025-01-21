import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo30Component } from './lib7-demo30.component';

describe('Lib7Demo30Component', () => {
  let component: Lib7Demo30Component;
  let fixture: ComponentFixture<Lib7Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
