import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo30Component } from './lib9-demo30.component';

describe('Lib9Demo30Component', () => {
  let component: Lib9Demo30Component;
  let fixture: ComponentFixture<Lib9Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
