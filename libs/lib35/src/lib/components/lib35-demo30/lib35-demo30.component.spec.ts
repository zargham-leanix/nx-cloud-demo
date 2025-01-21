import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo30Component } from './lib35-demo30.component';

describe('Lib35Demo30Component', () => {
  let component: Lib35Demo30Component;
  let fixture: ComponentFixture<Lib35Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
