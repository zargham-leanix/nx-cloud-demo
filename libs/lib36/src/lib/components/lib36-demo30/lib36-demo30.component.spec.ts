import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo30Component } from './lib36-demo30.component';

describe('Lib36Demo30Component', () => {
  let component: Lib36Demo30Component;
  let fixture: ComponentFixture<Lib36Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
