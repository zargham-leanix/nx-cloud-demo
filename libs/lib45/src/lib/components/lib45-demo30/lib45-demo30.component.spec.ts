import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo30Component } from './lib45-demo30.component';

describe('Lib45Demo30Component', () => {
  let component: Lib45Demo30Component;
  let fixture: ComponentFixture<Lib45Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
