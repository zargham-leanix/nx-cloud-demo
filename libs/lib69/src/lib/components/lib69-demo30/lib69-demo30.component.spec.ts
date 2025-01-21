import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo30Component } from './lib69-demo30.component';

describe('Lib69Demo30Component', () => {
  let component: Lib69Demo30Component;
  let fixture: ComponentFixture<Lib69Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
