import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo30Component } from './lib1-demo30.component';

describe('Lib1Demo30Component', () => {
  let component: Lib1Demo30Component;
  let fixture: ComponentFixture<Lib1Demo30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
